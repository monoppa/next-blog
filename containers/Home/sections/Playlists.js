import React from 'react';
import {} from 'prop-types';
import PlaylistCard from './PlaylistCard';
import Link from 'next/link';

const data = [
  {
    title: 'Thedas',
    description: 'Collection from games and movies',
    image: '/playlist/thedas.jpg',
    link:
      'https://open.spotify.com/playlist/3J5SVlq1KW4Sa96Uxcw8zg?si=csWSRkQ6R8qIXj0YhYMTtQ',
  },
  {
    title: 'England',
    description: `When I feel it's me vs. the world`,
    image: '/playlist/england-2.jpg',
    link:
      'https://open.spotify.com/playlist/3ZdTs8JCxaBmhVIcHtfQv6?si=GH1z768TQD-V3BmGDZ7SXg',
  },
  {
    title: 'Tokyo',
    description: 'Collection from anime',
    image: '/playlist/tokyo.jpg',
    link:
      'https://open.spotify.com/playlist/2MvVMXAqMkMldTvHafBk5S?si=POLtvW0tQAOe4GIE6pWhmA',
  },
  {
    title: 'Amsterdam',
    description: `Makes me want to break bad`,
    image: '/playlist/amsterdam.jpg',
    link:
      'https://open.spotify.com/playlist/5rxbIZjkdKxuXQEWQyBNyf?si=YLjqzdchQHiUBrn1Ingebg',
  },
];

const Playlists = () => {
  return (
    <div>
      <h2 className='text-xl tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl'>
        Playlists
      </h2>

      <ul className='grid grid-cols-1 mt-6 md:grid-cols-2'>
        {data.map((dat) => (
          <li key={dat.link}>
            <Link href={dat.link}>
              <a>
                <PlaylistCard {...dat} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Playlists.propTypes = {};

Playlists.defaultProps = {};

export default Playlists;
