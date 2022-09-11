import { useState } from 'react';
import styles from './square.module.css';

interface SquareProps {
    width: string;
    height: string
}
const squareSize = (width: string, height: string) => {
    return {
        width: width,
        height: height
    }
}

export default function({ width, height }: SquareProps): JSX.Element {
    const [pressed, setPressed] = useState(false)
    const handlePress = () => setPressed(!pressed)
    return <div className={`${styles.square} ${pressed ? styles.pressed : ''}`} style={squareSize(width, height)}onClick={handlePress}></div>
}