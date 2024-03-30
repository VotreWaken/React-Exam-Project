
import Calendar from '../../assets/img/SearchPage/Icons/Calendar.svg';
import  Capacity  from '../../assets/img/SearchPage/Icons/Capacity.svg';
import  Fuel  from '../../assets/img/SearchPage/Icons/Fuel.svg';
import  Wheel  from '../../assets/img/SearchPage/Icons/Wheel.svg';

const SearchCarsItem = ({ title, done, id, removeTask, toggleDone,index, updateTask, ...obj }) => {
  const baseUrl = 'http://localhost:4444';
    return (
      <div class="SearchCarCard" key={index} isLoading={true}>
      <div class="CarCardLeftSide">
      <img src={obj.image && obj.image.startsWith('/uploads') ? baseUrl + obj.image : obj.image} draggable="false" alt="" />
      </div>
      <div class="CarCardRightSide">
      <button>New</button>
      <h3>{obj.brand} {obj.model}</h3>
      <p>${obj.price}</p>
      <p>Florida, USA</p>
      <ul class="SearchCarsCarDetails">
      <li>
<img src={ Calendar } alt=""/>
<p>{obj.year}</p>    
</li>
<li>
<img src={ Wheel } alt=""/>
<p>Rear-wheel Drive</p>    
</li>
<li>
<img src={ Fuel } alt=""/>
<p>Electric</p>    
</li>
<li>
<img src={ Capacity } alt=""/>
<p>5</p>    
</li>
      </ul>
      <hr/>
      <div class="Car-Rating">
          ***** (12 Reviews)
      </div>
      </div>
  </div>

   ) }
  
  
  
  export default SearchCarsItem;
  