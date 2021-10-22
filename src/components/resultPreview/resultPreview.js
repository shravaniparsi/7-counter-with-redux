import './resultPreview.css';
import { connect } from "react-redux";

const resultPreview = (props)=>{
return (
    <div className="preview">
<h1 className="result">{props.count}</h1>
    </div>
)
}

const mapStateToProps = state => {
    return {
      count: state.counter
    };
  };
  

export default connect(mapStateToProps)(resultPreview);