import {Start} from './Star';
import {StarRating} from './StarRating';
import ColorList from './ColorList';

export class Color extends React.Component { 
    
    componentWillMount() {
        this.style = {
            backgroundColor: "#ccc"
        }
    }
    shouldComponentUpdate(nextProps) {
        const {rating} = this.props;
        return rating !== nextProps.rating;
    }
    componentWillUpdate() {
        this.style = null;
    }
    componentDidUpdate(prevProps) {
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
    }
    render() {
        const {title, rating, color, onRate} = this.props;
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <div className="color"
                    style={{ backgroundColor: color }}>
                </div>
                <StarRating starsSelected={rating} onRate={onRate} />
            </section>
        )
    }
}
