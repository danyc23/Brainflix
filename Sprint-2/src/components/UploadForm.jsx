import UploadImage from "../Assets/Upload-video-preview.jpg";
function UploadForm() {
  return (
    <div className="upload-form">
      <h1 className="upload-form__title">Upload Video</h1>
      <h3 className="upload-form__video__title">VIDEO THUMBNAIL</h3>
      <img
        className="upload-form__video"
        src={UploadImage}
        alt="Video Preview"
      />
      <h3 className="upload-form__input__title">TITLE YOUR VIDEO</h3>
      <div className="upload-form__input__container">
        <input
          className="upload-form__input__name"
          type="text"
          placeholder="Add a title to your video"
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
        />
      </div>
      <div className="upload-form__button__container">
        <button type="reset" className="upload-form__cancel--top">
          CANCEL
        </button>
        <button className="upload-form__publish__btn" type="submit">
          PUBLISH
        </button>
        <div className="upload-form__cancel__section">
          <button type="reset" className="upload-form__cancel">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
export default UploadForm;
