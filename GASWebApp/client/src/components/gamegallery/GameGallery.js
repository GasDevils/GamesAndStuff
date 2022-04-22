import React from 'react'
import './gamegallery.css'


const GameGallery = () => {


    return(
        <div>
  <head>
    <card>
      <table>
      <div id="topSearchDisplay">
        <table id="searchDisplay">
          <tr>
            <td>
              <input id="searchLocation" value='' type="text" placeholder='Search Game Title'></input>
              <select></select>
              <input id="search-button" type="submit" value="Search"></input> 
            </td>
          </tr>
          <tr id='customRangeSection_10'>
          </tr>
        </table>
      </div>
      </table>

      <div id="searchFiltersDisplay">
        <table>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>Keywords
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>Rating
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
             <td>Type
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>
              <input id='query' value='' type="text" placeholder=' e.g. survival, fantasy'
                     title='Enter keywords here'></input>

            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>
              <select id='locRadius' title='Enter the location radius to search on'>
                <option value=""selected="selected">None</option>
                <option value="0-10">0-10</option>
                <option value="10-30">10-30</option>
                <option value="40-50">40-50</option>
                <option value="60-70">60-70</option>
                <option value="70-80">70-80</option>
                <option value="90-100">90-100</option>
              </select>
            </td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>
              <select id='locRadius' title='Enter the location radius to search on'>
                <option value=""selected="selected">All</option>
                <option value="Tabletop">Tabletop</option>
                <option value="Video Game">Video Game</option>
              </select>
            </td>
          </tr>
        </table>
        <table>
        </table>
      </div>
    <form>
  
    <table>
    
      <tr>
        <td width='350'>
          <div id="video-container">
            <table id='tableOfVideoContentResults'></table>
          </div>
        </td>
        <td valign='top'>
          <div id="map-canvas"></div>
        </td>
      </tr>
    </table>

    </form>

    </card>
    </head>
</div>
    );
}

export default GameGallery;