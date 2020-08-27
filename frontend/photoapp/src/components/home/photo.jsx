import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import arrow from './../../assets/arrow.png'
import location from './../../assets/location.png'
import vote from './../../assets/thumb.png'
import rating from './../../assets/rating.png'

export const Photo = ({props}) => {
    const H = useHistory()

    useEffect(()=>{
        props.getSinglePhoto(props.photoID)
    }, [props.singlePhoto])

    return (
        <div className="photo">
            {
                (props.singlePhoto)?
                    <div className="photoinn">
                        <div className="closephotobtn" onClick={()=>{H.goBack()}}>
                            <div className="arrowcnt"><img src={arrow} className="arrow"/></div>
                            <div className="closeptxt">Close Photo</div>
                        </div>
                        <div className="photoimgcnt">
                            <img src={props.singlePhoto.image_url} className="photoimg"/>
                        </div>
                        <div className="photometa">
                            <div className="photometainn">
                                <div className="metatop">
                                   <div className="phototitle">{props.singlePhoto.name}</div>
                                   <div className="metaiconsm">
                                       <div className="metaitemhol">
                                           <div className="metaitmtopx">{props.singlePhoto.votes_count} votes</div>
                                           <img src={vote} className="metaitmtopx"/>
                                       </div>
                                       <div className="metaitemhol">
                                           <div className="metaitmtopx">{props.singlePhoto.user.country}</div>
                                           <img src={location} className="metaitmtopx"/>
                                       </div>
                                       <div className="metaitemhol">
                                           <div className="metaitmtopx">{props.singlePhoto.rating} rating</div>
                                           <img src={rating} className="metaitmtopx"/>
                                       </div>
                                   </div>
                                </div>
                               <div className="dateandviews">
                                   <div className="views">{props.singlePhoto.times_viewed} <span className="label">views</span></div>
                                   <div className="seperator"> • </div>
                                   <div className="date"><span className="label">{new Date(props.singlePhoto.created_at).toDateString()}</span></div>
                               </div>
                               <div className="descriptionmeta">
                                   <div className="descriptionmetainn">
                                       <div className="usermeta">
                                           <div className="userimghld"><img src={props.singlePhoto.user.userpic_https_url} className="userimgmt" /></div>
                                           <div className="usermetarighth">
                                               <div className="photousername">{props.singlePhoto.user.fullname}</div>
                                               <div className="photouserfollowers">{props.singlePhoto.user.followers_count} followers</div>
                                           </div>
                                       </div>
                                       <div className="photodescription">{props.singlePhoto.description}</div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                :
                <div>Loading...</div>
            }
        </div>
    )
}
