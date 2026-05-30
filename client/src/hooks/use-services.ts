import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { defaultServiceCards } from "@shared/services";

export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.services.list.path);
        if (!res.ok) return defaultServiceCards;

        const services = api.services.list.responses[200].parse(await res.json());
        return services.length > 0 ? services : defaultServiceCards;
      } catch {
        return defaultServiceCards;
      }
    },
    initialData: defaultServiceCards,
  });
}
