export default function CallBackLine() {
  return (
    <div>
      <a
        href={{
          pathname: "https://notify-bot.line.me/oauth/authorize",
          query: {
            response_type: "code",
            client_id: "kiCLZevmZ7fYn40VwFa4Vo",
            redirect_uri: "https://timetabs.teamrr.live/callback",
            scope: "notify",
            state: "{state}",
          },
        }}
      />
    </div>
  );
}
