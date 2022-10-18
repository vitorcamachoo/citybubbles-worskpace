export const BackgroundEffect = () => {
  return (
    <div
      style={{
        zIndex: -1,
        position: "absolute",
        width: "100%",
        height: "100%",
        transform: "translate(-10%, -20%)",
        filter: "blur(60px)",
        opacity: 0.5,
        background: "#82FFD2",
        borderEndEndRadius: "60%",
      }}
    />
  );
};
