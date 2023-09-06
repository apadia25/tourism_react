import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <>
        <br></br>
        <br></br>
            <div className='homee'>
                <table  cellspacing="60" cellpadding="60">
                    <tr>
                        <td className='name'><h1 className='head'><span>Orange</span>&ensp;
                        <span>Tours</span><br></br>&ensp;
                        <span>Nagpur</span>
                        <span>:</span>
                        <span>The</span>&ensp;
                        <span>Orange</span>&ensp;
                        <span>City</span></h1></td>
                        <td className='homee1'>
                            <fieldset className='t'>
                                <center>
                                    <p className='plan'>Plan Your Trip</p>
                                </center>
                                Name:<input type="text" name="first_name" className='aaa'/><br></br><br></br>
                                <label for="email">Email id:</label>
                                <input type="email" id="email" name="email" pattern=".+@gmail.com" className='aaa'/><br></br><br></br>
                                <label for="phone">Phone:</label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className='aaa'/><font size="1">Format: 123-456-7890</font><br></br><br></br>
                                Days Of Travel:<input type="number" name="days of travel" className='aaa'/><br></br><br></br>
                                Date Of Travel: <input type="date" name="DOT" className='aaa'/><br></br><br></br>
                                No Of People:<input type="number" name="nop" className='aaa'/><br></br><br></br>
                                <button onclick="alert('Save..We will shortly contact u on your email for more details.')">Submit</button>
                               &emsp; <input type="Reset" name="Reset" value="Reset" className='reset' />
                            </fieldset>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    )
}
