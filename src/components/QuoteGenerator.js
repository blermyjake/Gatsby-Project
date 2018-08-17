import React, { Component } from 'react'

export default class QuoteGenerator extends Component {
  render() {
    const items = [
      `“So we beat on, boats against the current, borne back ceaselessly into the past.”`,
      `I hope she'll be a fool -- that's the best thing a girl can be in this world, a beautiful little fool.`,
      `“Angry, and half in love with her, and tremendously sorry, I turned away.” `,
      `“And I like large parties. They’re so intimate. At small parties there isn’t any privacy.” `,
      `“I wasn't actually in love, but I felt a sort of tender curiosity.”`,
      `“Let us learn to show our friendship for a man when he is alive and not after he is dead.” `,
    ]

    var item = items[Math.floor(Math.random() * items.length)]

    return (
      <div>
        {item}
        <p>- F. Scott Fitzgerald, The Great Gatsby</p>
      </div>
    )
  }
}
