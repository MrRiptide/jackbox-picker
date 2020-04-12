import React from 'react';
import Types from '../types';

import Form from 'react-bootstrap/Form';

const Filter: React.FC<Types.FilterInterface> = (
  { onShowImagesChange,
    onPlayersChange,
    onJbGamesChange,
    jbGames,
    filterChecks,
    onFilterChecksChange }
  ) => {

  function handleShowImagesChange(event: any) {
    onShowImagesChange(event.target.checked);
  }


  function handlePlayersChange(event: any) {
    onPlayersChange(event.target.value);
  }
  

  function handleJbGamesChange(event: any) {
    onJbGamesChange(event.target);
  }

  function handleFilterChecksChange(event: any) {
    onFilterChecksChange(event.target);
  }

  const packCheckboxes = [
    {
      name: '1',
      key: 1,
      label: '1',
    },
    {
      name: '2',
      key: 2,
      label: '2',
    },
    {
      name: '3',
      key: 3,
      label: '3',
    },
    {
      name: '4',
      key: 4,
      label: '4',
    },
    {
      name: '5',
      key: 5,
      label: '5',
    },
    {
      name: '6',
      key: 6,
      label: '6',
    },
    {
      name: 'drawful2',
      key: 'drawful2',
      label: 'Drawful 2',
    },
];

const filterCheckboxes = [
  {
    name: 'extended_timers',
    key: 'extended_timers',
    label: 'Longer timers',
  },
  {
    name: 'family_mode',
    key: 'family_mode',
    label: 'Family friendly',
  },
  {
    name: 'audience',
    key: 'audience',
    label: 'Audience',
  },
  {
    name: 'drawing',
    key: 'drawing',
    label: 'Drawing involved',
  }
];

  return (
    <Form>
      <p>Enter your filter criteria below. Clicking a game image will launch that pack in Steam.</p>
      Select your Jackbox Packs:
      <Form.Group>
        {
          packCheckboxes.map(item => (
            <Form.Check
              key={item.key}
              name={item.name}
              label={item.label}
              id={item.name}
              inline
              defaultChecked
              value={jbGames[item.name]}
              onChange={handleJbGamesChange}
            />
          ))
        }
      </Form.Group>
      <Form.Group controlId="players-input">
        <Form.Control
          onChange={handlePlayersChange}
          type="tel"
          placeholder="Number of players"
          aria-label="Number of players"
        />
      </Form.Group>
      Hide games that don't have:
      <Form.Group>
        {
          filterCheckboxes.map(item => (
            <Form.Check
              key={item.key}
              name={item.name}
              label={item.label}
              id={item.name}
              inline
              value={filterChecks[item.name]}
              onChange={handleFilterChecksChange}
            />
          ))
        }
      </Form.Group>
      <Form.Check 
        type="switch"
        id="show-images-switch"
        label="Show game images"
        onClick={handleShowImagesChange}
        defaultChecked
      />
    </Form>
  );
};

export default Filter;
