import { useState, useEffect } from "react";

const UploadImages = () =>{
    const [images, setImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(()=>{
        if(images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageUrls(newImageUrls);
    }, [images])

    const onImageChange = (e) =>{
        setImages([...e.target.files]);
    }

    return(
        <>
            <input type={"file"} multiple accept="image/*" onChange={onImageChange}/>
            { imageUrls.map(imageSrc => <img src={imageSrc}/>) }
        </>
    )
}

export default UploadImages