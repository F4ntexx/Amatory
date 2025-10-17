import { useQuery } from "@tanstack/react-query";

export function Match() {
  const { data } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });
  return <h1>ID: {data.body}</h1>;
}
