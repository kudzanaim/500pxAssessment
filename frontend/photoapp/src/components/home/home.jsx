import React, {useEffect, useState} from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import {Photo} from './photo';
import _ from 'lodash'

import left from './../../assets/lft.png'
import right from './../../assets/rgt.png'

export const Home = ({props}) => {  
    const L = useLocation().pathname;
    const P = useParams();
    let PHOTOS;

    useEffect(()=>{
        const filter = (P.filter == undefined)? 'fresh_today': P.filter;
        props.getphotos(filter, 1);
        
    }, [useLocation().pathname]);

    const previousPaginate = ()=>{
        const count = (props.currentPage==1)? props.currentPage: 1;
        props.getphotos(L.replace('/',''), props.currentPage);
        
    };

    if(props.photos){
        PHOTOS = {...props.photos}
    }

  

    return (
        <div className="home">
            <div className="toptext">
                <h1 className="hdr">Fresh Today</h1>
                <p className="pdr">Recent added photos with the highest Pulse. </p>
            </div>
            <div className="tabbtn">
                <div className="inntabbt">
                    <Link to="/fresh_today" ><div style={(props.currentFilter=='fresh_today')? {background:'red', color:'white'}:{}} className="filterlink">Fresh Today</div></Link>
                    <Link to="/fresh_yesterday" ><div style={(props.currentFilter=='fresh_yesterday')? {background:'red', color:'white'}:{}} className="filterlink">Yesterday</div></Link>
                    <Link to="/editors" ><div style={(props.currentFilter=='editors')? {background:'red', color:'white'}:{}} className="filterlink">Editors Choice</div></Link>
                    <Link to="/highest_rated" ><div style={(props.currentFilter=='highest_rated')? {background:'red', color:'white'}:{}} className="filterlink">Highest Rated</div></Link>
                    <Link to="/upcoming" ><div style={(props.currentFilter=='upcoming')? {background:'red', color:'white'}:{}} className="filterlink">Upcoming</div></Link>
                </div>
            </div>
            <div id="gallery" className="imagelist">
                {
                    (props.photos)? Object.values(PHOTOS.photos).map((a,b)=>{
                        return (
                        <Link key={b} to={`${props.currentFilter}/photo/${a.id}`}>
                            <div className="imagefive"  >
                                <img src={a.image_url} className="imgitem" />
                                <div className="imgmeta" >
                                    <div className="imgvote">
                                        <img src={a.user.avatars.small.https} className="voteicon"/>
                                        <div className="voteicontxt">{a.user.fullname}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        )
                    }) : <div>Home</div>
                }
            </div>
            <div className="pagination">
                <div className="paginn">
                    <div className="paginatebtn" onClick={ ()=> previousPaginate() } > <img src={left} className="btnpagin"/> </div>
                    <div className="paginnum">      {props.currentPage} / {(props.photos)? props.photos.total_pages : 0}    </div>
                    <div className="paginatebtn" onClick={ ()=>props.getphotos(L.replace('/',''), props.currentPage+1) }>  <img src={right} className="btnpagin"/>  </div>
                </div>
            </div>
            {
              (L.includes('photo') && props.photos)? <Photo props={{...props, photoID:P.id}} /> : null
            }
        </div>
    )
}
