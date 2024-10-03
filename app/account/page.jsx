export default function Page() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Account</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>Als gebruiker wil ik een account kunnen aanmaken zodat ik toegang krijg tot de applicatie.</li>
                <li>Als gebruiker wil ik kunnen inloggen met mijn account zodat ik mijn persoonlijke gegevens kan bekijken.</li>
                <li>Als gebruiker wil ik mijn wachtwoord kunnen resetten zodat ik toegang kan krijgen als ik mijn wachtwoord ben vergeten.</li>
                <li>Als gebruiker wil ik uit kunnen loggen zodat mijn account veilig blijft.</li>
            </ul>
        </div>
    );
}