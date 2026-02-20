function UserProfile() {
  return (
    <div className="hover:shadow-xl bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img className=" hover:scale-110 transition-transform duration-300 ease-in-out rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" src="this.png" alt="User" />
      <h1 className="hover:text-blue-500 md:text-xl sm:text-lg text-blue-800 my-4 ">John Doe</h1>
      <p className="text-sm text-gray-600 md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;