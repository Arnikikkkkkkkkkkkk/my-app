import './css/style.css';
import { useState, useEffect, useRef } from 'react';

function Search() {
    return(
        <div className='centerblock__search search'>
            <svg className='search__svg'>
                <use xlinkHref='public/icon/sprite.svg#icon-search' />
            </svg>
            <input className='search__text' type='search' placeholder='Поиск' name='search' />
        </div>
    )
}

function Title() {
    return(
        <h2 className='centerblock__h2'>Треки</h2>
    )
}

function FilterButtonAuthor() {
    
    return(
        <div className='dropdown performer'>

                <ul className='dropdown__list'>
                    <li className='dropdown_item'>Michael Jackson</li>
                    <li className='dropdown_item'>Frank Sinatra</li>
                    <li className='dropdown_item'>Calvin Harris</li>
                    <li className='dropdown_item'>Zhu</li>
                    <li className='dropdown_item'>Arctic Monkeys</li>
                </ul>     
        </div> 
    )
}

function FilterButtonGenre() {
    
    return(
        <div className='dropdown genre'>
                <ul className='dropdown__list'>
                    <li className='dropdown_item'>Рок</li>
                    <li className='dropdown_item'>Хип-Хоп</li>
                    <li className='dropdown_item'>Поп-музыка</li>
                    <li className='dropdown_item'>Техно</li>
                    <li className='dropdown_item'>Инди</li>
                </ul>     
        </div> 
    )
}

function FilterButtonYear() {
    const [currentRadioValue, setVariableName] = useState()

  
    return(
        <div className='year'>
            <label htmlFor="new">
                <span className="custom-radio-btn" />
                <input className='year__input' type='radio' value='new' id='new' name='year' onChange={() =>
                setVariableName("new")} checked={currentRadioValue === 'new'}/> 
            Более новые</label>
            <label htmlFor="old">
                <span className="custom-radio-btn" />
                <input className='year__input' type='radio' value='old' id='old' name='year' onChange={() =>
                setVariableName("old")} checked={currentRadioValue === 'old'}/> 
            Более старые</label>
           
        </div>
    )
}

const useOutsideClickAuthor = (callback) => {
    const ref = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };

  const useOutsideClickYear = (callback) => {
    const year = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (year.current && !year.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [year]);
  
    return year;
  };

  const useOutsideClickGenre = (callback) => {
    const genre = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (genre.current && !genre.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [genre]);
  
    return genre;
  };

function Filter() {
    const [isFilterOpen, setVisible] = useState(false);
    const [isFilterGenreOpen, setOpen] = useState(false);
    const [isFilterYearOpen, setYearOpen] = useState(false);


    const toggleVisibility = () => setVisible((isOpen) => !isOpen);

    const toggleGenreFilter = () => setOpen((isOpen) => !isOpen);

    const toggleYearFilter = () => setYearOpen((isOpen) => !isOpen);
        
    
    const handleClickOutsideAuthor = () => {
        setVisible(false);
    };
    
    const ref = useOutsideClickAuthor(handleClickOutsideAuthor);

    const handleClickOutsideYear = () => {
        setYearOpen(false);
    };
    
    const year = useOutsideClickYear(handleClickOutsideYear);

    const handleClickOutsideGenre = () => {
        setOpen(false);
    };
    
    const genre = useOutsideClickGenre(handleClickOutsideGenre);

    

    return(
        <div className='centerblock__filter filter'>
            <div className='filter__title'>Искать по:</div>
            <div className={`filter__button button-author _btn-text ${isFilterOpen ? 'active' : ''} `} ref={ref} onClick={() => { toggleVisibility()}}  aria-hidden="true" role="button" tabIndex={0}>исполнителю</div>
            {isFilterOpen && (
                    
                    <FilterButtonAuthor />
                    
                )}
            <div className={`filter__button button-year _btn-text ${isFilterYearOpen ? 'active' : ''}`} ref={year} onClick={() => {toggleYearFilter()}} aria-hidden="true" role="button" tabIndex={0}>году выпуска</div>
            {isFilterYearOpen && (
                <FilterButtonYear />
            )

            }
            <div className={`filter__button button-genre _btn-text ${isFilterGenreOpen ? 'active' : ''}`} ref={genre} onClick={toggleGenreFilter} aria-hidden="true" role="button" tabIndex={0}>жанру</div>
            {isFilterGenreOpen && (
                    
                    <FilterButtonGenre />
                    
                )}
        </div>
    )
}

// --------------------------CenterBlock__Content-------------------//

const tracks = [
    {id: 1, author: 'Nero', album: 'Welcome Reality', title: 'Guilt', time: '4:44'},
    {id: 2, author: 'Dynoro, Outwork, Mr. Gee', album: 'Elektro', time: '2:22', title: 'Elektro'},
    {id: 3, author: 'Ali Bakgor', album: 'I’m Fire', time: '2:22', title: 'I’m Fire'},
    {id: 4, author: 'Стоункат, Psychopath', album: 'Non Stop', time: '4:12', title: 'Non Stop', subtitle: '(Remix)'},
    {id: 5, author: 'Jaded, Will Clarke, AR/CO', album: 'Run Run', time: '2:54', title: 'Run Run', subtitle: '(feat. AR/CO)'},
    {id: 6, author: 'Blue Foundation, Zeds Dead', album: 'Eyes on Fire', time: '5:20', title: 'Eyes on Fire', subtitle: '(Zeds Dead Remix)'},
    {id: 7, author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile', album: 'Mucho Bien', time: '3:41', title: 'Mucho Bien', subtitle: '(Hi Profile Remix)'},
    {id: 8, author: 'minthaze', album: 'Captivating', time: '1:48', title: 'Knives n Cherries'},
    {id: 9, author: 'Calvin Harris, Disciples', album: 'How Deep Is Your Love', time: '3:32', title: 'How Deep Is Your Love'},
    {id: 10, author: 'Tom Boxer', album: 'Soundz Made in Romania', time: '3:36', title: 'Morena'},
]


function ContentPlaylistTitle(){
    return(
        <div className='content__title playlist-title'>
            <div className='playlist-title__col col01'>Трек</div>
            <div className='playlist-title__col col02'>ИСПОЛНИТЕЛЬ</div>
            <div className='playlist-title__col col03'>АЛЬБОМ</div>
            <div className='playlist-title__col col04'>
                <svg className='playlist-title__svg' alt='time'>
                    <use xlinkHref='img/icon/sprite.svg#icon-watch' />
                </svg>
            </div>
        </div>
    )
}
/** 
function TrackTitleImage(){
    return(
        <div className='track__title-image'>
            <svg className='track__title-svg' alt='music'>
                <use xlinkHref='img/icon/sprite.svg#icon-note' />
            </svg>
        </div>
    )
}

function TrackTitleText(props){
    return(   
       <div className='track__title-text'>
        <a className='track__title-link' href={props.link}>
            {props.title}<span className='track__title-span' />
        </a>
       </div>
    )
}


function TrackTitle() {
    return(
        <div className='track__title'>
            <TrackTitleImage />
            <TrackTitleText />
        </div>
    )
}
 
function TrackAuthor(props) {
    return(
        <div className='track__author'>
            <a className='track__author-link' href={props.link}>{props.text}</a> 
        </div>
    )
}

function TrackAlbum(props) {
    return(
    <div className='track__album' >
        <a className='track__album-link' href={props.link}>{props.album}</a>
    </div>
    )
}

function TrackTime(props) {
    return(
    <div className='track__time' >
            <svg className='track__time-svg' alt='time'>
                <use xlinkHref='img/icon/sprite.svg#icon-like' />
            </svg>
            <span className='track__time-text'>{props.time}</span>
        </div>
    )
} 
   
*/
function SkeletonTrack() {
    return(
        <div className='playlist__item'> 
            <div className='playlist__track playlist__track_skeleton track'>
                <div className='track__title'>
                    <div className='track__title-image '>
                        <div className='skeleton_image'></div>
                    </div>
                    <div className='track__title-text'>
                        <div className='skeleton_title'></div>
                    </div>
                </div>
                <div className='track__author'>
                    <div className='skeleton_author'></div>
                </div>
                <div className='track__album'>
                    <div className='skeleton_album'></div>
                </div>

            </div>
        </div>    
    )
}



function PlayListItem({author, album, time, title, subtitle}) {
    return(
        <div className='playlist__item'> 
            <div className='playlist__track track'>
                <div className='track__title'>
                    <div className='track__title-image'>
                        <svg className='track__title-svg" alt="music'>
                            <use xlinkHref='img/icon/sprite.svg#icon-note' />
                        </svg>
                    </div>
                    <div className='track__title-text'>
                        <a className='track__title-link' href='http://'>{title}<span className='track__title-span'>{subtitle}</span></a>
                       
                    </div>
                </div>
                <div className='track__author'>
                    <a className='track__author-link' href='http://'>{author}</a>
                </div>
                <div className='track__album'>
                    <a className='track__album-link' href='http://'>{album}</a>
                </div>
                <div className='track__time'>
                    <svg className='track__time-svg' alt='time'>
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className='track__time-text'>{time}</span> 
                </div>
            </div>
        </div>
    )



}
/**  
function PlayListItem(){
    return(
        <div className='playlist__item'>
            <div className='playlist__track track'>
                <TrackTitle />
                <TrackAuthor />
                <TrackAlbum />
                <TrackTime />
            </div>
        </div>
    )
}
*/

function Content () {
    return(

            tracks.map(({id, author, album, title, subtitle, time}) => 
            <PlayListItem key={id} author={author} album={album} title={title} subtitle={subtitle} time={time}/>
            )

    )
    
}


function ContentPlaylistPlaylist() {


    const [skeleton, setSkeleton] = useState(false);
  
    useEffect(() => {
        setSkeleton(true);
        setTimeout(async () => {

            setSkeleton(false);

        }, 5000);
    }, []);
 

    return(
        <div className='content__playlist playlist'>
             {!skeleton ?
             <Content /> :
             (
             <>
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             <SkeletonTrack />
             </> 
             )
            } 
        </div>
    )
     

}


function CenterBlockContent(){
    return(
        <div className='centerblock__content'>
            <ContentPlaylistTitle />
            <ContentPlaylistPlaylist />
        </div>
    )
}

// ------------------------------------ //

function MainCenterBlock() {
    return(
        <div className='main__centerblock centerblock'>
            <Search />
            <Title />
            <Filter />
            <CenterBlockContent />
        </div>
    )
}

export default MainCenterBlock;