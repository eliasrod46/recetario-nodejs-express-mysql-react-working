import { LinkBreadCrumbs } from "../components/Buttons";
export function NavRoutes({ breadcrumb }) {
  return (
    <div className="px-4 py-2 text-grey-800 flex justify-start bg-white bg-opacity-50 rounded-b-2xl mt-2">
      {breadcrumb.map((ruta, i) => {
        return (
          <div key={i} className="text-sm">
            <LinkBreadCrumbs to={ruta.route}>{ruta.name}/</LinkBreadCrumbs>
          </div>
        );
      })}
    </div>
  );
}
