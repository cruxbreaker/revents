import React, { useState } from 'react';
import { Form, Label, Search } from 'semantic-ui-react';
import { placesAutocomplete } from '../../services/placesAutocomplete';
import { formatPlaceName } from '../../utlis/formatPlaceName';

function PlaceInput({
  input: { value, onChange },
  width,
  proximity,
  onSelect,
  placeholder,
  meta: { touched, error },
}) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleOnChange = async (e) => {
    setLoading(true);
    const searchText = e.target.value;
    onChange(searchText);
    if (searchText) {
      try {
        const { features } = await placesAutocomplete({
          searchText,
          types: proximity ? 'poi' : 'place',
          proximity: proximity ? `${proximity.lat},${proximity.lng}` : '',
        });
        setResults(
          features.map((feature) => ({
            id: feature.id,
            title: feature.text,
            description:
              feature.context.length === 3
                ? `${feature.context[1].text}, ${feature.context[2].text}`
                : `${feature.context[0].text}, ${feature.context[1].text}`,
            placename: formatPlaceName({
              title: feature.text,
              description:
                feature.context.length === 3
                  ? `${feature.context[1].text}, ${feature.context[2].text}`
                  : `${feature.context[0].text}, ${feature.context[1].text}`,
            }),
            latlng: feature.center,
          }))
        );
      } catch (err) {
        setResults([]);
      }
    }
    setLoading(false);
  };

  return (
    <Form.Field error={touched && error}>
      <Search
        loading={loading}
        fluid={true}
        style={{ width: 'inherit' }}
        icon=''
        placeholder={placeholder}
        onResultSelect={(event, data) => {
          onSelect(data.result);
          onChange(data.result.placename);
        }}
        onSearchChange={handleOnChange}
        results={results}
        value={value || ''}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
}

export default PlaceInput;
