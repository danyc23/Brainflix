import UploadImage from "../Assets/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

function UploadForm(props) {
  return (
    <form className="upload-form" onSubmit={props.handleSubmit}>
      <h1 className="upload-form__title">Upload Video</h1>
      <div className="upload-form__desktop-wrapper">
        <div>
          <h3 className="upload-form__video__title">VIDEO THUMBNAIL</h3>
          <img
            className="upload-form__video"
            src={UploadImage}
            alt="Video Preview"
          />
        </div>
        <div>
          <h3 className="upload-form__input__title">TITLE YOUR VIDEO</h3>
          <div className="upload-form__input__container">
            <input
              className="upload-form__input__name"
              type="text"
              placeholder="Add a title to your video"
              onChange={props.handleTitle}
              value={props.formData.title}
            ></input>
          </div>
          <h3 className="upload-form__input__desc__title">
            ADD A VIDEO DESCRIPTION
          </h3>
          <div className="upload-form__input__container upload-form__input__container--desc">
            <textarea
              className="upload-form__input__desc"
              type="text"
              placeholder="Add a description of your video"
              onChange={props.handleDescription}
              value={props.formData.description}
            />
          </div>
        </div>
      </div>
      <div className="upload-form__button__container">
        <button type="reset" className="upload-form__cancel--top">
          CANCEL
        </button>
        <button className="upload-form__publish__btn" type="submit">
          PUBLISH
        </button>
        <div className="upload-form__cancel__section">
          <Link to="/">
            <button type="reset" className="upload-form__cancel">
              CANCEL
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
export default UploadForm;
