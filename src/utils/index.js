export const updateArrayObj = (arr, id, changes, key) => {
  const currentIndex = arr.findIndex((item) => item.id === id);
  const currentItem = arr[currentIndex];

  const updatedItem = {
    ...currentItem,
    ...(key ? { [key]: currentItem[key] + changes[key] } : changes),
  };

  const updatedItems = [
    ...arr.slice(0, currentIndex),
    updatedItem,
    ...arr.slice(currentIndex + 1),
  ];
  return updatedItems;
};
