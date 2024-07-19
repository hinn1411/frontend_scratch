import Image from "next/image";

const AdminProfile = () => {
  return (
    <button className="h-10 w-10 flex items-center justify-center rounded-full border border-input bg-background">
      <Image
        src={"/placeholder-user.jpg"}
        alt="admin avatar"
        width={36}
        height={36}
        className="w-9 h-9 rounded-full overflow-hidden"
      />
    </button>
  );
};

export default AdminProfile;
