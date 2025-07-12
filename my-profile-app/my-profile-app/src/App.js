import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: {
        fullName: "Ibruss Diakité",
        bio: "Développeur passionné React et entrepreneur.",
        imgSrc: "https://avatars.githubusercontent.com/u/12345678?v=4",
        profession: "Développeur Web"
      },
      montre: false,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleMontre = () => {
    this.setState(prevState => ({
      montre: !prevState.montre
    }));
  };

  render() {
    const { Personne, montre, elapsedTime } = this.state;
    return (
      <div style={{textAlign: "center", marginTop: 50}}>
        <button onClick={this.toggleMontre}>
          {montre ? "Cacher Profil" : "Afficher Profil"}
        </button>

        {montre && (
          <div style={{ marginTop: 20 }}>
            <h1>{Personne.fullName}</h1>
            <img
              src={Personne.imgSrc}
              alt={Personne.fullName}
              style={{ width: 200, borderRadius: 10 }}
            />
            <p><strong>Bio :</strong> {Personne.bio}</p>
            <p><strong>Profession :</strong> {Personne.profession}</p>
          </div>
        )}

        <p style={{marginTop: 30}}>
          Temps écoulé depuis le montage : <strong>{elapsedTime} secondes</strong>
        </p>
      </div>
    );
  }
}

export default App;