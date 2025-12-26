export function getYears(startDate: Date): number {
    const ageDifMs = Date.now() - startDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function getMyAge(): number {
    return getYears(new Date("2009-10-31"));
}

export function getYearsOfExperience(): number {
	return getYears(new Date("2021-07-08"));
}
