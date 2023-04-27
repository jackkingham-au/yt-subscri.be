export const getFields = (form) => {
    const data = {}

    const formData = new FormData(form);

    for(const pair of formData.entries()) {
        let inputName = pair[0];
        let inputValue = pair[1].trim();

        if(inputValue !== '') data[inputName] = inputValue;
    }

    return data;
}