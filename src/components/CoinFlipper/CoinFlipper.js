import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.

    //Toplam atis icin, toplam tura sayisi icin ve toplam yazi sayisi icin state degerleri olusturuyoruz.
    this.state = {
      side: 'tura',
      flipping: false,
      throwCount: 0,
      yaziCount: 0,
      turaCount: 0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({
      flipping: true,

      //"At" tusuna basildiginda toplam atis degerini bir artiriyoruz.
      throwCount: this.state.throwCount + 1,
    });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

    //Math.random fonsiyonunun döndügü degere göre, 0.5'den kücükse paranin yüzünü tura,
    //0.5'den kücükse paranin yüzünü yazi gelecek sekilde fonsiyon olusturuyoruz.
    if (Math.random() < 0.5) {
      this.setState({ side: 'tura', turaCount: this.state.turaCount + 1 });
      console.log(Math.random());
    } else {
      this.setState({ side: 'yazi', yaziCount: this.state.yaziCount + 1 });
    }
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.throwCount} </strong>
          atıştan
          <strong> {this.state.turaCount} </strong>ü tura
          <strong> {this.state.yaziCount} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
