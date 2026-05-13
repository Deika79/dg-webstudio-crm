export function getStatusColor(status: string) {
  switch (status) {
    case "PENDING":
      return "bg-gray-500";

    case "CONTACTED":
      return "bg-blue-500";

    case "INTERESTED":
      return "bg-yellow-500";

    case "MEETING":
      return "bg-purple-500";

    case "PROPOSAL_SENT":
      return "bg-orange-500";

    case "CLIENT":
      return "bg-green-500";

    case "REJECTED":
      return "bg-red-500";

    default:
      return "bg-gray-500";
  }
}

export function formatStatus(status: string) {
  switch (status) {
    case "PENDING":
      return "Pendiente";

    case "CONTACTED":
      return "Contactado";

    case "INTERESTED":
      return "Interesado";

    case "MEETING":
      return "Reunión";

    case "PROPOSAL_SENT":
      return "Presupuesto";

    case "CLIENT":
      return "Cliente";

    case "REJECTED":
      return "Rechazado";

    default:
      return status;
  }
}

export function formatService(service: string) {
  switch (service) {
    case "NEW_WEBSITE":
      return "Web nueva";

    case "REDESIGN":
      return "Rediseño";

    case "SEO":
      return "SEO";

    case "MAINTENANCE":
      return "Mantenimiento";

    case "ECOMMERCE":
      return "Ecommerce";

    default:
      return service;
  }
}