export async function getBase64(file, resizeValue) {
    return new Promise((res) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const objURL = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
            let canvasWidth = img.width;
            let canvasHeight = img.height;
            const isImageResizeNeed = img.width > resizeValue || img.height > resizeValue;
            if (isImageResizeNeed) {
                const aspectRatio = img.width / img.height;
                if (img.width > img.height) {
                    canvasWidth = resizeValue;
                    canvasHeight = resizeValue / aspectRatio;
                }
                else {
                    canvasHeight = resizeValue;
                    canvasWidth = resizeValue * aspectRatio;
                }
            }
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            if (ctx) {
                ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
                const base64 = canvas.toDataURL('image/jpeg', 0.8);
                res(base64);
                URL.revokeObjectURL(objURL);
            }
        };
        img.src = objURL;
        img.onerror = () => console.log('Incorrect file :(');
    });
}
