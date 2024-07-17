interface WebsiteEmbedProps {
  website: string;
}
const WebsiteEmbed = ({ website }: WebsiteEmbedProps) => {
  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <iframe
          src={website}
          style={{ border: "none", width: "100%", height: "100%" }}
          allowFullScreen
        />
      </div>
    </>
  );
};

export default WebsiteEmbed;
