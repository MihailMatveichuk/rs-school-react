import React, { useState } from 'react';
import './CardForm.scss';
import { ICardForm } from 'type';

const CardForm = (item: ICardForm) => {
  const { file, firstName, birthday, select, switcher, checkbox } = item;
  const [filePath, setFilePath] = useState<FileList>();
  console.log(item.file[0]?.name as string);
  const fileInputElement = formRef.current?.elements.namedItem('file') as HTMLInputElement;
  const fileList: FileList | null = fileInputElement.files;
  const fileListAsArray = fileList ? Array.from([...fileList]) : [];
  if (fileListAsArray.length > 0 && fileListAsArray[0] instanceof Blob) {
    const objectImg: Blob = fileListAsArray[0];
    const pathImg = URL.createObjectURL(objectImg);
    setFilePath(pathImg);
  }
  return (
    <div className="product-item">
      <img src={filePath} alt="img" className="image" />
      <div className="product-list">
        <h3>{firstName}</h3>
        <p className="price">{`Birthday: ${birthday}`}</p>
        <p>{`Country: ${select}`}</p>
        <p
          style={{
            fontWeight: 'bold',
          }}
        >
          Sex: {switcher ? 'Female' : 'Male'}
        </p>
        <p>{`Rights: ${checkbox ? 'Yes' : 'No'}`}</p>
      </div>
    </div>
  );
};

export default CardForm;
