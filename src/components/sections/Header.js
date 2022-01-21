import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connectWallet, disconnectWallet } from '../../actions';

const Header = ({Tezos, wallet, setTezos}) => {
    const selector = useSelector(state => {return state.walletConfig.user});
    const dispatch = useDispatch();

    const onClick = (event) => {
        event.preventDefault();
        if(selector.userAddress===""){
            dispatch(connectWallet({Tezos, wallet}));
        }else{
            dispatch(disconnectWallet({wallet, setTezos}));
        }
    }

    return (
            <div className="ui menu black" style={{'marginTop':'30px'}}>
                <a href="/#" className="ui header item"><img style={{'width':'100px'}} src="https://beta.discoapp.xyz/static/media/navbar_logo.eab00386.png"></img>_nfts</a>
                <Link className="item" to="/">Home</Link>

                {selector.userAddress!==""?
                <Link className="item" to="/create">Create NFT</Link>
                :null}

                <div className="right menu">

                    {selector.userAddress!==""?
                    <Link className="item" to="/">Profile</Link>
                    :null}

                    {(selector.userAddress==="")?
                    <a href="/#" className="item" onClick={onClick}>Connect Wallet</a>:
                    <a href="/#" className="item" onClick={onClick}>Disconnect Wallet</a>}
                </div>
            </div>
        );
}

export default Header;