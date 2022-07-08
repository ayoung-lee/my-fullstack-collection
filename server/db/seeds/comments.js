/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
      id: 234,
      videoGames_id: 1,
      date_posted: new Date(Date.now()),
      comment:
        'Driveclub is the best-looking racing game I’ve ever seen on a console, but down deep it’s a more modest, conventional arcade racer than the sprawling, open-world types we commonly see today. While it successfully creates fast and fun races with a great sense of speed, the overly aggressive AI grates, the difficult drifting seems at odds with the accessible handling, and the single-player loses zest once the solo content runs dry. I’m also surprised at how partisan the day-one car list is. That said, the tentacles of Driveclub can grip tight if you get invested in the game’s asynchronous challenges, and it’s very much geared around encouraging us to hop online and compete by making it so easy.',
    },
    {
      id: 235,
      videoGames_id: 2,
      date_posted: new Date(Date.now()),
      comment:
        'Uncharted 4: A Thief’s End is a remarkable achievement in blockbuster storytelling and graphical beauty. Though it’s let down by a lack of imagination and some self-indulgence, especially in a third act that drags on far too long, Uncharted 4 carries on the series’ proud tradition of peerless polish and style, with a great multiplayer component to boot. Most importantly, it’s a gentle sendoff to the rag-tag group of characters we’ve known for nine years. A worthy thief’s end, indeed.',
    },
    {
      id: 236,
      videoGames_id: 3,
      date_posted: new Date(Date.now()),
      comment:
        'The Phantom Pain is the kind of game I thought would never exist - one where every minute gameplay detail has true purpose. Its lack of story focus is sure to be divisive for the Metal Gear faithful, but the resulting emphasis on my story, my tales of Espionage Action, easily make it my favorite in the series. There have certainly been sandbox action games that have given me a bigger world to roam, or more little icons to chase on my minimap, but none have pushed me to plan, adapt, and improvise the way this one does. Metal Gear Solid 5: The Phantom Pain doesn’t just respect my intelligence as a player, it expects it of me, putting it in a league that few others occupy.',
    },
    {
      id: 237,
      videoGames_id: 4,
      date_posted: new Date(Date.now()),
      comment:
        'In 2013, I called The Last of Us on PlayStation 3 a masterpiece. The same holds true of its PlayStation 4 "Remastered" sibling. You can’t go wrong with either version, but with Remastered you’ll get a better framerate that smooths out gunplay, a prettier, sharper look, and a bunch of DLC content rolled into the package from the get-go (not to mention a whole fresh set of Trophies to earn again, if you have a whole lot of time on your hands). Whether you’ve already experienced it on PlayStation 3 or have no idea what you’re missing, The Last of Us: Remastered is worth your time and attention. PlayStation 3’s best game just became PlayStation 4’s, too.',
    },
    {
      id: 238,
      videoGames_id: 5,
      date_posted: new Date(Date.now()),
      comment:
        'GTA 5 is still a masterpiece. The open world is fantastic, the presentation is brilliant, the characters are well-written and the varied gameplay is still a lot of fun. Thanks to the technical improvements of the remastered version for PS5 the game still feels fresh and the gameplay is even better because of up to 60 fps in the two performance modes.',
    },
  ])
}
