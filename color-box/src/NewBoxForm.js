import React, {useState} from 'react'
import {v4 as uuid} from 'uuid';

function NewBoxForm({createNewBox}) {

    const [formData, setFormData] = useState({
        width:"",
        height:"",
        backgroundColor:""
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]:value
        }));
    };

    const handleInput = evt => {
        evt.preventDefault();
        createNewBox({...formData, id: uuid()});
        setFormData({
            width:"",
            height:"",
            backgroundColor:""
        });
    };


    return(
        <div>
            <form onSubmit={handleInput}>
                <div>
                    <label>Width</label>
                    <input 
                    onChange={handleChange}
                    value={formData.width}
                    type='text'
                    id='width'
                    name='width'/>
                </div>
                <div>
                    <label>Height</label>
                    <input 
                    onChange={handleChange}
                    value={formData.height}
                    type='text'
                    id='height'
                    name='height'/>
                </div>
                <div>
                    <label>backgroundColor</label>
                    <input 
                    onChange={handleChange}
                    value={formData.backgroundColor}
                    type='text'
                    id='backgroundColor'
                    name='backgroundColor'/>
                </div>
                <button>Add new box</button>
            </form>
        </div>
    );
}



export default NewBoxForm;