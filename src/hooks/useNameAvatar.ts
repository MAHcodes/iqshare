const useNameAvatar = (name: string) => {
  if (!name) return "";
  const [firstName, lastName] = name.split(" ");
  return `${firstName[0]}${lastName ? lastName[0] : ""}`.toUpperCase();
};

export default useNameAvatar;
