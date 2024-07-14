import "./UpdateImageModal.css";
import { useCallback, useState } from "react";

export function UpdateImageModal({ onUpdate, img, onConfirm }) {
  
    const [localImg, setImg] = useState(null);
    const [loading, setLoading] = useState(false);

    const confirm = useCallback(async () => {
      setLoading(true);
      await onConfirm();
      setLoading(false);
    }, [onConfirm])

    const onUpdateImage = useCallback((e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    onUpdate(e);
  }, [onUpdate]);
  return (
    <div className="update-image-modal" onClick={(e) => e.stopPropagation()}>
      <img src={localImg ? localImg : "/addImage.svg"} className={localImg?"circled":""} alt="uploaded" />
      <label for="image-upload">Upload an image</label>(PNG, JPEG, JPG)
      <input
        id="image-upload"
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={(e) => onUpdateImage(e)}
      />
      {
        !loading?<button onClick={() => confirm()}>Confirm</button>: <div className="loader"></div>
      }
    </div>
  );
}
