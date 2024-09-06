function useDebounce(func, delay) {
let timeoutId;
return function (...args) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    func(...args);
  }, delay);
};
}

export default useDebounce