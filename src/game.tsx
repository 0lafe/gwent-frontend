import React from "react"

const Game = () => {
  return (
    <>
      <div id="dimensions" style={{ position: "fixed", width: "100vw", height: "calc(100vw * 1080 / 1920)" }}></div>
      <div id="youtube"></div>

      <main>
        <section id="click-background" className="noclick"></section>
        <section id="panel-left" className="panel">
          <div id="leader-op" className="leader-box">
            <div className="leader-container center">
            </div>
            <div className="leader-active">
              <div></div>
            </div>
          </div>

          <section id="stats-op" className="stats">
            <div className="profile-img">
              <div><div></div></div>
            </div>

            <div id="name-op" className="name">Opponent</div>
            <div id="deck-name-op" className="deck-name"></div>
            <div id="hand-count-op" className="hand-count">6</div>
            <div id="gem1-op" className="gem gem-on bg-contain"></div>
            <div id="gem2-op" className="gem gem-on bg-contain"></div>
            <div id="score-total-op" className="score-total"><div className="center">0</div></div>
            <div id="passed-op">Passed</div>
          </section>

          <div id="weather" className="card-container">
          </div>

          <section id="stats-me" className="stats">
            <div className="profile-img">
              <div><div></div></div>
            </div>
            <div id="passed-me">Passed</div>
            <div id="hand-count-me" className="hand-count">5</div>

            <div id="gem1-me" className="gem gem-on bg-contain"></div>
            <div id="gem2-me" className="gem gem-on bg-contain"></div>

            <div id="name-me" className="name"></div>
            <div id="deck-name-me" className="deck-name"></div>

            <div id="score-total-me" className="score-total"><div className="center">0</div></div>
          </section>

          <div id="leader-me" className="leader-box">
            <div className="leader-container center"></div>
            <div className="leader-active">
              <div></div>
            </div>
          </div>

          <div id="pass-button" className="center">Pass</div>
        </section>

        <section id="panel-mid" className="panel">
          <section id="field-op" className="field">
            <div className="field-row">
              <div className="row-score center">12</div>
              <div className="row-special card-container"></div>
              <div className="row-cards card-container"></div>
              <div className="row-weather"></div>
            </div>
            <div className="field-row">
              <div className="row-score center">0</div>
              <div className="row-special card-container"></div>
              <div className="row-cards card-container"></div>
              <div className="row-weather"></div>
            </div>
            <div className="field-row">
              <div className="row-score center">0</div>
              <div className="row-special card-container"></div>
              <div className="row-cards card-container"></div>
              <div className="row-weather"></div>
            </div>
          </section>

          <section id="field-me" className="field">
            <div className="field-row">
              <div className="row-score center">0</div>
              <div className="row-special card-container"></div>
              <div className="row-cards card-container"></div>
              <div className="row-weather"></div>
            </div>
            <div className="field-row">
              <div className="row-score center">0</div>
              <div className="row-special card-container"></div>
              <div className="row-cards card-container"></div>
              <div className="row-weather"></div>
            </div>
            <div className="field-row">
              <div className="row-score center">0</div>
              <div className="row-special card-container"></div>
              <div className="row-cards card-container"></div>
              <div className="row-weather"></div>
            </div>
          </section>

          <section id="field-hand">
            <div id="hand-row" className="card-container card-selectable">
            </div>
          </section>
        </section>

        <section id="panel-right" className="panel">
          <div id="grave-op" className="cardpile">
          </div>
          <div id="deck-op" className="cardpile">

          </div>
          <div id="grave-me" className="cardpile">
          </div>
          <div id="deck-me" className="cardpile">
          </div>
        </section>

        <div id="hand-op"></div>

        <section className="card-preview hide">
          <div className="card-lg"></div>
          <div className="card-description">
            <div></div>
            <h1></h1>
            <p></p>
          </div>
        </section>

        <section id="carousel" className="hide">
          <div>
            <div className="card-lg"></div>
            <div className="card-lg"></div>
            <div className="card-lg"></div>
            <div className="card-lg"></div>
            <div className="card-lg"></div>
          </div>
          <div className="card-description">
            <div></div>
            <h1></h1>
            <p></p>
          </div>
          <div></div>
        </section>

        <section id="popup" className="center hide">
          <div>
            <h3></h3>
            <p></p>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
        </section>

        <section id="notification-bar" className="hide">
          <div></div>
        </section>

        <section id="end-screen" className="hide">
          <div></div>
          <table>
            <colgroup>
              <col span={3} />
              <col span={1} />
              <col span={1} />
              <col span={1} />
            </colgroup>
            <tbody>
              <tr>
                <th colSpan={2}></th>
                <th>Round 1</th>
                <th>Round 2</th>
                <th>Round 3</th>
              </tr>
              <tr>
                <th colSpan={2}>Geralt</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th colSpan={2}>Opponent</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <p className="hide">The battle cannot end in a draw. You can play a rematch using the same decks or surrender.</p>
          <button>Customize</button>
          <button>Replay</button>
        </section>

        <section id="deck-selector">

        </section>
      </main>

      <section id="deck-customization">
        <div id="faction-title" className="center">
          <h1></h1>
        </div>
        <p id="faction-description"></p>

        <label id="upload-deck" className="deck-options">
          Upload Deck
        </label>

        <a id="change-faction" className="deck-options">Change Faction</a>

        <a id="download-deck" className="deck-options">Download Deck</a>
        <a id="download-json" style={{ display: "none" }}></a>

        <h2 id="card-bank-title" className="card-contianer-title">Card Collection</h2>
        <h2 id="card-deck-title" className="card-contianer-title">Cards in Deck</h2>
        <div id="card-bank" className="card-array">
        </div>
        <div id="card-deck" className="card-array">
        </div>
        <div id="card-leader">
          <p>Leader</p>
          <div></div>
        </div>
        <div id="deck-stats">
          <p>Total cards in deck</p>
          <p>0</p>
          <p>Number of Unit Cards</p>
          <p>0</p>
          <p>Special Cards</p>
          <p>0/10</p>
          <p>Total Unit Card Strength</p>
          <p>0</p>
          <p>Hero Cards</p>
          <p>0</p>
        </div>
        <button id="start-game">Start game</button>
      </section>

      <div id="toggle-music" className="center music-customization">♫</div>
    </>
  )
}

export default Game