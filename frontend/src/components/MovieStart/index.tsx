import {ReactComponent as StarFull} from 'assert/img/star-full.svg';
import {ReactComponent as StarHalf} from 'assert/img/star-half.svg';
import {ReactComponent as StarEmpty} from 'assert/img/star-empty.svg';
import 'styles.css';


function MovieStart(){
return(
    <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
);
}

export default MovieStart;