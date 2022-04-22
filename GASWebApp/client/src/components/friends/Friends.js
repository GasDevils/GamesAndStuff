import React from 'react'
import './friends.css'

const Friends = () => {
    return(
        <div>
            <head>
                <card>

                    <div id="topSearchDisplay"></div>
                    <table id="searchDisplay">
                        
                                <tr></tr>
                                <td></td>
                                <input id="searchLocation" value='' type="text" placeholder='Search for friends!'></input>
                        

                                <input id="search-button" type="submit" value="Search"></input>

                        <div id="map-canvas"></div>
                            
                    </table>
                </card>
            </head>
        </div>
    );
}


export default Friends;