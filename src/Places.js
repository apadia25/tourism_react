import React from 'react';
import './Places.css';
import a from './assets/ambazari.png';
import b from './assets/adasa.jpg';
import c from './assets/BAPS.jpg';
import d from './assets/deeksha-bhoomi.jpg';
import e from './assets/futala.jpg';
import f from './assets/Khindsi lake.jpg';
import g from './assets/pench-tiger-safari.jpg';
import h from './assets/ramtek_fort.jpg';
import i from './assets/Sai-Baba.jpg';
import j from './assets/telankhedi-hanuman-temple.jpg';
import k from './assets/temple.jpg';
import l from './assets/zeromile.jpg';

export default function Places() {
    return (
        <>
            <div className='p1'>
                <fieldset className='p2'>
                    <h1 className='p3'>Fomous Places in City</h1><br></br>
                    <h1 className='p4'>Being India is geographical centre there are many mind-boggling places to visit in Nagpur.
                        Right from wildlife sanctuaries to lakes and temples this place is replete with the most stunning attractions.
                        Proposed as one of the smart cities of the country, this place is dotted with many religious and historic sites. Enriched with rich cultural heritage,
                        you will find plenty of places to visit in Nagpur like temples, gardens, lakes.
                        Owing to its famous places, you will be hooked in this city for a good amount of time.
                        Adding to your information, it is deemed that the people of Nagpur belong to the Nag Dynasty
                        and are disciples of Lord Buddha. Further, this city has gained immense popularity as a snake-like river
                        is flowing through it. Nagpur is termed as Tiger Capital of India or Tiger Gateway of India as there are
                        many tiger reserves positioned in and around the city.Here are some of top Places. </h1>
                    <br></br>
                    <br></br>
                    <table border="0" margin="20" cellspacing="20" cellpadding="20" align="left">
                        <tr>
                            <td><a href="https://ganeshmandirtekdi.org/"><img src={k} width="400" height="350"></img></a><h6>01. Shree Ganesh Mandir Tekdi</h6></td>
                            <td><a href="https://www.baps.org/Global-Network/India/Nagpur.aspx"><img src={c} width="400" height="350"></img></a><h6>02. Swaminarayan Temple</h6></td>
                            <td><a href="https://en.wikipedia.org/wiki/Deekshabhoomi"><img src={d} width="400" height="350"></img></a><h6>03. Deeksha Bhoomi</h6></td>
                        </tr>
                        <tr>
                            <th><a href="https://en.wikipedia.org/wiki/Zero_Mile_Stone_(Nagpur)"><img src={l} width="400" height="350"></img></a><h6>04. Zero Mile Marker</h6></th>
                            <th><a href="https://nagpur.gov.in/tourist-place/khindsi-lake/"><img src={f} width="400" height="350"></img></a><h6>05. Khindsi Lake</h6></th>
                            <th><a href="https://www.penchnationalparkonline.in/online-pench-safari-booking.html"><img src={g} width="400" height="350"></img></a><h6>06. Pench Tiger Reserve</h6></th>
                        </tr>
                        <tr>
                            <th><a href="https://en.wikipedia.org/wiki/Adasa,_India"><img src={b} width="400" height="350"></img></a><h6>07. Adasa Ganpati Temple</h6></th>
                            <th><a href="https://en.wikipedia.org/wiki/Futala_Lake"><img src={e} width="400" height="350"></img></a><h6>08. Futala Lake</h6></th>
                            <th><a href="https://en.wikipedia.org/wiki/Ambazari_Lake"><img src={a} width="400" height="350"></img></a><h6>09. Ambazari Lake</h6></th>
                        </tr>
                        <tr>
                            <th><a href="https://www.google.com.my/travel/entity/key/ChcIi_GK9eaGydFzGgsvZy8xdzl4X2tuMRAE?ved=0CAAQ5JsGahcKEwiY3Jvp07X8AhUAAAAAHQAAAAAQBA&ts=CAESABoECgIaACoECgAaAA"><img src={j} width="400" height="350"></img></a><h6>10. Telankhedi Hanuman Temple</h6></th>
                            <th><a href="http://saitemples.com/temples/shirdi-saibaba-mandir-nagpur"><img src={i} width="400" height="350"></img></a><h6>11. Sai Baba Temple</h6></th>
                            <th><a href="https://en.wikipedia.org/wiki/Ramtek"><img src={h} width="400" height="350"></img></a><h6>12. Ramtek Fort</h6></th>
                        </tr>
                    </table>
                </fieldset>
            </div>
        </>
    )
}
