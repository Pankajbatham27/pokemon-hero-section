import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import pikachu from './images/pikachu.png';
import Jigglypuff from './images/Jigglypuff.png';
import Charizard from './images/Charizard.png';
import bulbAssured from './images/bulb-assured.png';
import golduck from './images/golduck.png';
import squirtle from './images/squirtle.png';


import style from './Pokemon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { getColor } from 'color-thief-react';


const Pokemon = ({ setDominantColor, setLightenedColor }) => {

    const [count, setCount] = useState(0);

    const [content, setContent] = useState([
        {
            'title': 'PIKACHU',
            'desp': 'Pikachu is an iconic Electric-type Pokémon that has captured the hearts of millions of fans around the world. With its bright yellow fur, rosy cheeks, and adorable appearance, Pikachu is easily recognizable and loved by both children and adults alike. Known as the "Mouse Pokémon," Pikachu possesses a unique ability to generate electricity within its body. It stores electrical energy in its small cheek sacs and releases it in the form of powerful electric shocks. These electric attacks, such as Thunderbolt and Thunder Shock, make Pikachu a formidable opponent in battles. Aside from its electric powers, Pikachu is also known for its friendly and playful nature. It forms strong bonds with its trainers and shows unwavering loyalty. Ash Ketchums Pikachu, the main character in the Pokémon animated series, is a perfect example of this enduring companionship.',
            'image': pikachu
        },
        {
            'title': 'Jiggly Puff',
            'desp': 'Pikachu is an iconic Electric-type Pokémon that has captured the hearts of millions of fans around the world. With its bright yellow fur, rosy cheeks, and adorable appearance, Pikachu is easily recognizable and loved by both children and adults alike. Known as the "Mouse Pokémon," Pikachu possesses a unique ability to generate electricity within its body. It stores electrical energy in its small cheek sacs and releases it in the form of powerful electric shocks. These electric attacks, such as Thunderbolt and Thunder Shock, make Pikachu a formidable opponent in battles. Aside from its electric powers, Pikachu is also known for its friendly and playful nature. It forms strong bonds with its trainers and shows unwavering loyalty. Ash Ketchums Pikachu, the main character in the Pokémon animated series, is a perfect example of this enduring companionship.',
            'image': Jigglypuff
        },
        {
            'title': 'Charizard',
            'desp': 'Pikachu is an iconic Electric-type Pokémon that has captured the hearts of millions of fans around the world. With its bright yellow fur, rosy cheeks, and adorable appearance, Pikachu is easily recognizable and loved by both children and adults alike. Known as the "Mouse Pokémon," Pikachu possesses a unique ability to generate electricity within its body. It stores electrical energy in its small cheek sacs and releases it in the form of powerful electric shocks. These electric attacks, such as Thunderbolt and Thunder Shock, make Pikachu a formidable opponent in battles. Aside from its electric powers, Pikachu is also known for its friendly and playful nature. It forms strong bonds with its trainers and shows unwavering loyalty. Ash Ketchums Pikachu, the main character in the Pokémon animated series, is a perfect example of this enduring companionship.',
            'image': Charizard
        },
        {
            'title': 'Bulb Assured',
            'desp': 'Pikachu is an iconic Electric-type Pokémon that has captured the hearts of millions of fans around the world. With its bright yellow fur, rosy cheeks, and adorable appearance, Pikachu is easily recognizable and loved by both children and adults alike. Known as the "Mouse Pokémon," Pikachu possesses a unique ability to generate electricity within its body. It stores electrical energy in its small cheek sacs and releases it in the form of powerful electric shocks. These electric attacks, such as Thunderbolt and Thunder Shock, make Pikachu a formidable opponent in battles. Aside from its electric powers, Pikachu is also known for its friendly and playful nature. It forms strong bonds with its trainers and shows unwavering loyalty. Ash Ketchums Pikachu, the main character in the Pokémon animated series, is a perfect example of this enduring companionship.',
            'image': bulbAssured
        },
        {
            'title': 'Gol Duck',
            'desp': 'Pikachu is an iconic Electric-type Pokémon that has captured the hearts of millions of fans around the world. With its bright yellow fur, rosy cheeks, and adorable appearance, Pikachu is easily recognizable and loved by both children and adults alike. Known as the "Mouse Pokémon," Pikachu possesses a unique ability to generate electricity within its body. It stores electrical energy in its small cheek sacs and releases it in the form of powerful electric shocks. These electric attacks, such as Thunderbolt and Thunder Shock, make Pikachu a formidable opponent in battles. Aside from its electric powers, Pikachu is also known for its friendly and playful nature. It forms strong bonds with its trainers and shows unwavering loyalty. Ash Ketchums Pikachu, the main character in the Pokémon animated series, is a perfect example of this enduring companionship.',
            'image': golduck
        },
        {
            'title': 'Squirtle',
            'desp': 'Pikachu is an iconic Electric-type Pokémon that has captured the hearts of millions of fans around the world. With its bright yellow fur, rosy cheeks, and adorable appearance, Pikachu is easily recognizable and loved by both children and adults alike. Known as the "Mouse Pokémon," Pikachu possesses a unique ability to generate electricity within its body. It stores electrical energy in its small cheek sacs and releases it in the form of powerful electric shocks. These electric attacks, such as Thunderbolt and Thunder Shock, make Pikachu a formidable opponent in battles. Aside from its electric powers, Pikachu is also known for its friendly and playful nature. It forms strong bonds with its trainers and shows unwavering loyalty. Ash Ketchums Pikachu, the main character in the Pokémon animated series, is a perfect example of this enduring companionship.',
            'image': squirtle
        }
        
    ]);


    
    const [direction, setDirection] = useState(0);
    const [directionRight, setDirectionRight] = useState(0);


    function lightenColor(color, amount) {
        // Parse the color string and extract RGB values
        const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        const result = regex.exec(color);
        const rgb = result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;

        if (!rgb) {
            // Invalid color format, return the original color
            return color;
        }

        // Lighten the RGB values
        const lightenedRgb = {
            r: lightenValue(rgb.r, amount),
            g: lightenValue(rgb.g, amount),
            b: lightenValue(rgb.b, amount)
        };

        // Convert the RGB values back to a hexadecimal string
        const lightenedColor = `#${componentToHex(lightenedRgb.r)}${componentToHex(lightenedRgb.g)}${componentToHex(lightenedRgb.b)}`;

        return lightenedColor;
    }

    function lightenValue(value, amount) {
        // Increase the value by a percentage of the maximum (255)
        const newValue = Math.round(value + (255 - value) * amount);
        // Ensure the new value stays within the valid range
        return Math.min(newValue, 255);
    }

    function componentToHex(component) {
        const hex = component.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }


    useEffect(() => {


        const fetchDominantColor = async () => {
            try {
                const dominantColor = await getColor(content[count].image, 'hex');

                const lightenedColor = lightenColor(dominantColor, 0.2);
                setDominantColor(dominantColor);
                setLightenedColor(lightenedColor);

            } catch (error) {
                console.error('Error extracting color:', error);
            }
        };

        fetchDominantColor();

    }, [count])


    const preHandler = () => {

        if (count > 0) {

            setDirection(1);

            setDirectionRight(1);

            setTimeout(() => {
                setDirectionRight(0);
            }, 500);

            setCount(count - 1)
        }

    }

    const nextHandler = () => {
        if (count < content.length - 1) {
            setDirection(2);

            setDirectionRight(2)
            setTimeout(() => {
                setDirectionRight(0);
            }, 500);

            setCount(count + 1)
        }
    }

    return (
        <>
            <div style={{ height: '100vh' }} className='d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center justify-content-center image'>
                            <div className={style.imageCover}>
                                {content && content.map((item, key) => {
                                    return <div key={key} className={key === count ? (direction === 1 ? style.focusImageLeft : style.focusImageRight) : style.absolute}><img src={item.image} height="300px" /></div>
                                })}
                            </div>
                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <div className={style.rightText}>
                                <div className={directionRight !== 0 ? (directionRight === 1 ? style.bottomToUp : style.upToBottom) : 'none'}>
                                    <h2 className={style.heading}>{content[count].title}</h2>
                                    {content[count].desp}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.pagination}>
                    <ul>
                        <li style={{opacity: count <= 0 && '0'}} onClick={preHandler}><FontAwesomeIcon icon={faArrowLeftLong} /></li>
                        <li style={{opacity: content.length - 1 === count && '0'}} onClick={nextHandler}><FontAwesomeIcon icon={faArrowRightLong} /></li>

                    </ul>
                </div>
            </div>
        </>

    )
}
export default Pokemon;