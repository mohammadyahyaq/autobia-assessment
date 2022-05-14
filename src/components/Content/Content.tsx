import React from 'react';
import { useSelector } from 'react-redux';
import { reducersType } from '../../reducers';
import { CustomCheckbox } from './CustomCheckbox';

export const Content: React.FC = () => {
    const menuState = useSelector<reducersType, boolean>(state => state.menu);

    return (
        <div className={`content parent-height ${menuState || 'close'}`}>
            <section className='form-section'>
                <header>Design</header>
                <form>
                    <CustomCheckbox id='f1-ch1' title='Prepare the overall layout' />
                    <CustomCheckbox id='f1-ch2' title='Convert the design to HTML + CSS' />
                    <CustomCheckbox id='f1-ch3' title='Make the design responsive and fits well with small screens' />
                    <CustomCheckbox id='f1-ch4' title='Use Sass as your CSS preprocessor' />
                    <CustomCheckbox id='f1-ch5' title='Use Roboto font' />
                    <CustomCheckbox id='f1-ch6' title='Spacing in the design is strictly using multiple of 8. Use 8px as a reference' />
                    <CustomCheckbox id='f1-ch7' title='Use Tailwind CSS' />
                </form>
            </section>
            <section className='form-section'>
                <header>Functionality</header>
                <form>
                    <CustomCheckbox id='f2-ch1' title='Add the functionality to mark tasks as completed' />
                    <CustomCheckbox id='f2-ch2' title='Add the ability to toggle the side-menu' />
                    <CustomCheckbox id='f2-ch3' title='Add the functionality to search through tasks' />
                    <CustomCheckbox id='f2-ch4' title='Submit the final work in a git repository' />
                </form>
            </section>
            <section className='form-section'>
                <header>Design</header>
                <form>
                    <CustomCheckbox id='f3-ch1' title='Use NPM/Yarn to manage packages, run a web server and compile SASS files' />
                    <CustomCheckbox id='f3-ch2' title='Add your own touch to improve the application and explain why you did so' />
                    <CustomCheckbox id='f3-ch3' title='Make the website bilingual (English and Arabic) and the direction to be left-to-right and right-to-left (You can ignore the content translation)' />
                    <CustomCheckbox id='f3-ch4' title='Design a UI/UX solution for adding new tasks and groups, you can use Figma or any other UI design software' />
                </form>
            </section>
        </div>
    );
}