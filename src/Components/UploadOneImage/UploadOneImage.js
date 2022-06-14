import { useState, useEffect } from "react";
import styles from './UploadOneImage.module.scss';

const UploadOneImage = () =>{
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState(false);

    useEffect(()=>{
        console.log(image);
        if(image.length < 1) return;
        setImageUrl(URL.createObjectURL(image));
    }, [image])

    const handleImageChange = (e) =>{
        setImage(e.target.files[0]);
    }

    const renderImage = (imageUrl) =>{
        return (imageUrl !== false) ? <img src={imageUrl}/> : '';
    }

    return(
        <>
            <label htmlFor="file-upload" className={styles['custom-file__upload']}>
                Upload Image
            </label>
            <input accept="image/*" className={styles['input-file']} id="file-upload" type="file" onChange={handleImageChange}/>
            {renderImage(imageUrl)}
        </>
    )
}

export default UploadOneImage;