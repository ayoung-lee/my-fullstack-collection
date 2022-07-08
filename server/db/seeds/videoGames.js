/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('videoGames').del()
  await knex('videoGames').insert([
    {
      id: '1',
      title: 'Drive Club',
      genre: 'Racing',
      platform: 'ps4',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Driveclub_box_art.jpg/250px-Driveclub_box_art.jpg',
    },

    {
      id: '2',
      title: "Uncharted 4: A Thief's End",
      genre: 'Action Adventure',
      platform: 'ps4',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Uncharted_4_box_artwork.jpg/250px-Uncharted_4_box_artwork.jpg',
    },

    {
      id: '3',
      title: 'Metal Gear Solid V: The Phantom Pain',
      genre: 'Action Adventure, Stealth',
      platform: 'ps4',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png/250px-Metal_Gear_Solid_V_The_Phantom_Pain_cover.png',
    },

    {
      id: '4',
      title: 'The Last of Us Remastered',
      genre: 'Action Adventure, Survival Horror',
      platform: 'ps4',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/The_Last_of_Us_Remastered.jpg/250px-The_Last_of_Us_Remastered.jpg',
    },
    {
      id: '5',
      title: 'Grand Theft Auto V',
      genre: 'Action Adventure',
      platform: 'ps4',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/250px-Grand_Theft_Auto_V.png',
    },
  ])
}
