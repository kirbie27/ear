import './App.css';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import dex from './dex.png'
import dext from './dext.svg';
import { useState, useCallback, useRef } from 'react';
import { useEffect } from 'react';
import trump from './trump.png';
import jjm from './jjm.mp3';
import jjm2 from './jjm2.mp3';
import ear from './ear.png';
import trump2 from './trump2.png';
import supply from './supply.png';
import team from './team.png';
import burn from './burn.png';
import gecko from './gecko.png';
import { exchanges } from './exchanges';
function Home() {

  const copyText = () => {
    var text = document.getElementById("ca").innerText;

    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the text content to the paragraph text
    textarea.value = text.replace("Click text to squish CA", "");

    console.log(textarea.value);

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Alert the user that the text has been copied
    alert("$EAR CA copied. Send It.");
  }



  const [data, setData] = useState({ price: 0, volume: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/2BUZ19fT8TYvPzhuvtCCp9ceu9eNRCmY11S4vSATpump');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        if (jsonData.pairs) {
          setData({ price: jsonData.pairs[0].priceUsd, volume: jsonData.pairs[0].volume.h24 });
        }

      } catch (error) {
        setData({ price: 0, volume: 0 });
      }
    };

    const fetchDataInterval = setInterval(fetchData, 3000); // Fetch data every 3 seconds

    // Cleanup function to cancel the interval when component unmounts or changes
    return () => clearInterval(fetchDataInterval);
  }, []);

  const formatNumber = useCallback((n) => {
    if (n < 1000) {
      return n.toString(); // If less than 1000, return the number as string
    } else if (n < 1000000) {
      return (n / 1000).toFixed(2) + "K"; // Convert to K format
    } else if (n < 1000000000) {
      return (n / 1000000).toFixed(2) + "M"; // Convert to M format
    } else {
      return (n / 1000000000).toFixed(2) + "B"; // Convert to B format
    }
  }, []);



  const aRef = useRef(null);

  const playMusic = () => {
    if (aRef) {
      aRef.current.currentTime = 0;
      aRef.current.play();
    }
  }


  const bRef = useRef(null);


  const [playing, setPlaying] = useState(false);

  const playSong = () => {
    if (bRef) {
      bRef.current.currentTime = 0;
      bRef.current.play();
      setPlaying(true);
    }
  }
  const stopSong = () => {
    if (bRef) {
      bRef.current.pause();
      setPlaying(false);
    }
  }


  return (
    <div className="home">
      <div className="foot">
        <div className='buttonsH'>
          <a href="https://x.com/theearstayson?s=11" className='logs' target="_blank" rel="noreferrer">
            <FaXTwitter size={28} color='black' />
            <p className='loginfo'>Visit X</p>
          </a>
          <a className='logs' href="https://t.me/earstayson" target='_blank' rel="noreferrer">
            <FaTelegramPlane size={28} color='black' />
            <p className='loginfo'>Telegram.</p>
          </a>
          <div className='logs' onClick={() => {
            window.open('https://www.dextools.io/app/en/solana/pair-explorer/CU6JLMqYQv1hyrQNspGyLQtbbrViuFLybVLPcMpKKzyu', '_blank');
          }} >
            <img src={dext} alt="linus" className='dex' />
            <p className='loginfo'>Dextools</p>
          </div>

          <div className='logs' onClick={() => {
            window.open('https://dexscreener.com/solana/CU6JLMqYQv1hyrQNspGyLQtbbrViuFLybVLPcMpKKzyu', '_blank');
          }}>
            <img src={dex} alt="linus" className='dex' /><p className='loginfo'>Dexscreener</p>
          </div>

          <div className='logs' onClick={() => {
            window.open('https://www.coingecko.com/en/coins/the-ear-stays-on', '_blank');
          }}>
            <img src={gecko} alt="linus" className='dex' /><p className='loginfo'>Coingecko</p>
          </div>


        </div>
      </div>
      <div className="section land">
        {/* <div className='ldiv1'>
            <img src={logo} alt="roor" className='img shingle' />
            <img src={main} alt="roor" className='img shingle main' />
          </div>
          <div className='txt'><img src={logotxt} alt="roor" className='logotxt img shingle' /></div> */}


        <div className='lbody'>

          <div className='ltextcont'>
            <h1>$EAR</h1>
          </div>
          <p className='paw'>THE EAR STAYS ON AND WILL ALWAYS BE ON</p>
          <div className='radca'>
            <p className='calabel'>CA:</p>
            <p onClick={copyText} id="ca" className='ca'>2BUZ19fT8TYvPzhuvtCCp9ceu9eNRCmY11S4vSATpump
              <div><p className='tooltip'>Click text to squish CA</p></div></p>

          </div>
          {/* <div className='glasscard'>

            <div className='textcontainer'>  <p className='maintext'>Market Cap: </p><p className='highlight' >{formatNumber(data.price * 999238.80) || 0}$</p></div>
            <div className='textcontainer'> <p className='maintext'>24H Volume: </p><p className='highlight'>{formatNumber(data.volume) || 0}$</p></div>
            <div className='textcontainer'>  <p className='maintext'>Price: </p><p className='highlight' >{data.price || 0}$</p></div>
          </div> */}

          <div className='buttonsHF'>
            <input type="button" className='btnBig' value="GET YOUR $EAR"

              onClick={() => {
                window.open('https://jup.ag/swap/SOL-2BUZ19fT8TYvPzhuvtCCp9ceu9eNRCmY11S4vSATpump', '_blank');
              }}

            />

            <input type="button" className='btnBig' value={playing ? "Stop Music" : "Play Music"}

              onClick={playing ? stopSong : playSong}

            />

            <a href='#PFPMaker' className='btnBig' >Make a PFP</a>

            {/* <input type="button" className='btnBig'
              style={{ backgroundColor: "white", color: "white !important" }}
              value={`${music ? 'STOP' : 'PLAY'} MUSIC`}
              onClick={music ? stopMusic : playMusic}

            /> */}
            {/* <a className='btnBigBlack' href="#maker" style={{ backgroundColor: "black", color: "white !important", textDecoration: "none" }}>Make a Squishy</a>
            <a className='btnBigBlack' href="#Tokememes" style={{ backgroundColor: "black", color: "white !important", textDecoration: "none" }}>View Squishy Memes</a> */}
            {/* {music ? <MdMusicOff className="btnM" size={20} color='black' onClik={stopMusic} /> : <MdMusicNote className="btnM" size={20} color='black' onClick={playMusic} />} */}
            <img src={ear} onClick={playMusic} className="tenga" alt="heyy" style={{ width: "5rem", height: "auto", cursor: "pointer" }} />
          </div>
          <div className='glasscard'>

            <div className='textcontainer'>  <p className='maintext'>Market Cap: </p><p className='highlight' >{formatNumber(data.price * 989999992.19) || 0}</p></div>
            <div className='textcontainer'> <p className='maintext'>24H Volume: </p><p className='highlight'>{formatNumber(data.volume) || 0}$</p></div>
            <div className='textcontainer'>  <p className='maintext'>Price: </p><p className='highlight' >{data.price || 0}$</p></div>
          </div>

        </div>

        <img src={trump} alt="heyy" className='cardimgmascot' />


        <audio ref={aRef} id="myAudio" controls autoplay preload="auto" style={{ display: "none" }} >
          <source src={jjm} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <audio ref={bRef} id="myAudio" controls autoplay loop preload="auto" style={{ display: "none" }} >
          <source src={jjm2} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>


      </div>

      <div className="section abbt" id="Tokenomics">
        <h1>About $EAR</h1>
        <div className='radabout'>
          {/* <h1 className='radhd' id='radhd'>What is $RAD?</h1> */}

          <div className='radcontent'>
            <div className='abouttexts'>
              <h1>We are hearing things...</h1>
              <p>$EAR is a community takeover project. Passionate and diligent to its duty to serve the community. Earnest in upholding values and principles. Committed to the meme. Committed to the community. Committed to ensure that the EAR stays on.</p>
            </div>
            <img src={trump2} alt="heyy" className='aboutmascot' />

          </div>


        </div>


      </div>

      <div className="section abbt" id="Tokenomics">


        <h1>EAR-nomics</h1>
        <div className='gallery'>
          <div className='card shingle'>
            <img src={supply} alt="heyy" className='cardimg' />

            <div className='cardtext'>
              <p>990 Million.</p>
            </div>
          </div>
          <div className='card shingle'>
            <img src={team} alt="heyy" className='cardimg' />

            <div className='cardtext'>
              <p>Zero Team Tokens. CTO.</p>
            </div>
          </div>
          <div className='card shingle'>
            <img src={burn} alt="heyy" className='cardimg' />

            <div className='cardtext'>
              <p>10 Million Burned.</p>
            </div>
          </div>
        </div>


      </div>

      <div className="section abbt" id="PFPMaker">


        <h1>Make your own $EAR PFP</h1>
        <div className='pfpplaceholder'>
          <p>Coming soon...</p>
        </div>


      </div>

      <div className="section abbt" id="Tokenomics">


        <h1>$EAR is listed on multiple Exchanges!</h1>
        <div className='exchanges'>
          {
            exchanges.map((x) =>
              <div className='exchangecard' onClick={() => {
                window.open(x.url, '_blank');
              }}>
                <img src={x.img} alt="heyy" className='exchangeimg' />
                <p>{x.name}</p>
              </div>
            )
          }
        </div>


      </div>


    </div >

  );
}

export default Home;