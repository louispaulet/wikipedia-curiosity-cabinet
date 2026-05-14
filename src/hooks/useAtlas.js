import { useEffect, useState } from 'react';
import { atlasSchema } from '../lib/schema.js';
import { buildAtlasIndex } from '../lib/atlas.js';

export const useAtlas = () => {
  const [state, setState] = useState({
    atlas: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await fetch('/data/atlas.json');
        if (!response.ok) {
          throw new Error(`Failed to load atlas data (${response.status})`);
        }

        const json = await response.json();
        const parsed = atlasSchema.parse(json);

        if (!active) return;

        setState({
          atlas: buildAtlasIndex(parsed),
          loading: false,
          error: null,
        });
      } catch (error) {
        if (!active) return;
        setState({
          atlas: null,
          loading: false,
          error,
        });
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return state;
};
