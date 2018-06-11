import React from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                titile,
                color,
                rating: 0
            }
        ]
        this.setState({colors})
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
            color :
                {
                    ...color,
                    rating
                }
        )
        this.setState({colors})
    }

    removeColor() {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({colors})
    }

    render() {
        const {addColor, rateColor, removeColor} = this
        const {colors} = this.state
        return (
            <div className='app'>
                <AddColorForm onNewColor={addColor} />
                <ColorList  
                    colors={colors}
                    onRate={rateColor}
                    onRemove={removeColor} 
                />
            </div>
        )
    }
}