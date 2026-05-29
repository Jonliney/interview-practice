import { useState } from "react";

const modules = {
  users: ["read", "write", "delete"],
  billing: ["read", "refund"],
  reports: ["read", "export"],
} as const;

type ModuleName = keyof typeof modules;
type ActionName = (typeof modules)[ModuleName][number];
type PermissionKey = `${ModuleName}.${ActionName}`;

const initialPermissions: Record<PermissionKey, boolean> = {
  "users.read": true,
  "users.write": false,
  "users.delete": false,
  "billing.read": true,
  "billing.refund": false,
  "reports.read": true,
  "reports.export": false,
};

export default function App() {
  const [permissions, setPermissions] = useState(initialPermissions);

  function togglePermission(key: PermissionKey) {
    setPermissions({
      ...permissions,
      [key]: !permissions[key],
    });
  }

  return (
    <main>
      <h1>Permissions</h1>

      {(Object.keys(modules) as ModuleName[]).map((moduleName) => (
        <section key={moduleName}>
          <label style={{ display: "block", marginBottom: 8 }}>
            <input type="checkbox" checked={false} readOnly /> {moduleName}
          </label>

          {(modules[moduleName] as readonly ActionName[]).map((actionName) => {
            const key = `${moduleName}.${actionName}` as PermissionKey;

            return (
              <label key={key} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  checked={permissions[key]}
                  onChange={() => togglePermission(key)}
                />
                {actionName}
              </label>
            );
          })}
        </section>
      ))}

      <button type="button">Save permissions</button>
      <pre>{JSON.stringify(permissions, null, 2)}</pre>
    </main>
  );
}
