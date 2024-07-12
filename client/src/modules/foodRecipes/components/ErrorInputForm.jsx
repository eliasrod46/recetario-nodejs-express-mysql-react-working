export function ErrorInputForm({ errors, field }) {
  return (
    <div>
      <ul>
        {errors.map((error, i) => {
          if (error.path == field) {
            return (
              <li className="text-center text-red-500 text-xs" key={i}>
                {error.msg}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
